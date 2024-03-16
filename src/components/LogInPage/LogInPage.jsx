import { LogInContent } from "./component/LogInContent"
import { LogInFooter } from "./component/LogInFooter"
import { LogInUpHeader } from "./component/LogInHeader"

export function LogInPage() {
    return (
        <div className="h-screen">
            <LogInUpHeader/>
            <LogInContent/>
            <LogInFooter/>
        </div>
    )
}