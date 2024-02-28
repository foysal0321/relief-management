import { ReactNode } from "react"
import { useAppSelector } from "../../redux/hooks"
import { currentToken } from "../../redux/feauters/auth/authSlice"
import { Navigate } from "react-router-dom"

function ProtecedRoute({ children }: { children: ReactNode }) {

    const token = useAppSelector(currentToken)

    if (!token) {
        return <Navigate to='/login' replace={true} />
    }

    return children
}


export default ProtecedRoute
