import { Navigate } from 'react-router';
import { useUser } from '../contexts/UserContext';

type ProtectedRouteProps = {
	children: React.ReactNode;
};

export function ProtectedRoute({ children }: ProtectedRouteProps) {
	const { user, loading } = useUser();

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!user) {
		return <Navigate to='/login' />;
	}

	return <>{children}</>;
}
