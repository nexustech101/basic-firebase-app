import type { User } from "./user";

export interface AuthPageProps {
  onAuthSuccess?: (user?: unknown) => void; // Made optional since useAuth handles state
}

export interface LandingPageProps {
  user: User | null;
  onSignOut: () => void;
}