import { AuthProvider } from "./auth";
import { AppRoutes } from "./router/AppRoutes";


export const HeroApp = () => {
    return (
        <AuthProvider>
            <AppRoutes/>
        </AuthProvider>
    )
}

