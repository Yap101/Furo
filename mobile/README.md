Furo Mobile - Expo Starter

This is a minimal Expo TypeScript app scaffold to manage provider features from the Furo backend.

Quick start (requires Node.js 18+ and pnpm or npm):

1. Install dependencies

```powershell
# Windows PowerShell
pnpm install
# or
npm install
```

2. Start Expo

```powershell
pnpm start
# or
npm run start
```

3. Configure backend URL
- The app now prefers the runtime env var `EXPO_PUBLIC_BASE_URL`.
- Create a `.env` file at the project root based on `.env.example`.

```env
EXPO_PUBLIC_BASE_URL=http://10.0.2.2:3000
EXPO_PUBLIC_WC_PROJECT_ID=YOUR_WALLETCONNECT_PROJECT_ID
```

4. Emulator/simulator tips
- Android emulator to local backend: use `http://10.0.2.2:3000`.
- iOS simulator to local backend: use `http://localhost:3000`.
- Physical devices: use your machine LAN IP (e.g. `http://192.168.1.100:3000`) or enable Expo Tunnel.

5. Notes on backend connectivity
- Ensure your backend is running and CORS allows requests from the mobile app.

6. Wallet integration
- WalletConnect v2 is integrated using SignClient.
- Set `EXPO_PUBLIC_WC_PROJECT_ID` (create one at https://cloud.walletconnect.com).
- Use the Wallet screen to connect; if a pairing URI appears, copy it and open in your wallet if it doesn’t open automatically.

7. Replace placeholder endpoints
- The screens call placeholder provider endpoints like `/api/providers/me/balance` and `/api/providers/me/transactions`. Update these to match your backend routes and auth.
