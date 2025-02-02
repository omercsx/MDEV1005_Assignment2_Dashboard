import { User } from 'firebase/auth';
import { createContext, useContext } from 'react';

type UserContextType = {
	user: User | null;
	loading: boolean;
};

// Creating context
export const UserContext = createContext<UserContextType>({
	user: null,
	loading: true,
});

// Creating hook
export const useUser = () => useContext(UserContext);
