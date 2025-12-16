
# Open ports 8081 (Metro Bundler) and 19000-19006 (Expo) for Inbound Traffic

# Self-elevate the script if required
if (!([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
    Start-Process powershell.exe "-NoProfile -ExecutionPolicy Bypass -File `"$PSCommandPath`"" -Verb RunAs
    exit
}

Write-Host "Attempting to open Firewall ports for Expo..."

$rules = @(
    @{ Name="Express Server 3000"; Port=3000 },
    @{ Name="Expo Metro Bundler"; Port=8081 },
    @{ Name="Expo Default"; Port=19000 },
    @{ Name="Expo Alt 1"; Port=19001 },
    @{ Name="Expo Alt 2"; Port=19002 }
)

foreach ($rule in $rules) {
    try {
        New-NetFirewallRule -DisplayName $rule.Name -Direction Inbound -LocalPort $rule.Port -Protocol TCP -Action Allow -ErrorAction Stop
        Write-Host "✅ Successfully opened port $($rule.Port) ($($rule.Name))"
    } catch {
        Write-Error "❌ Failed to open port $($rule.Port). Make sure you are running this script as Administrator."
    }
}

Write-Host "Done. Please restart your Expo server (pnpm start)."
pause
