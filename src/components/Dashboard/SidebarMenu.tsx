import { Link, Outlet } from "react-router-dom"

function SidebarMenu() {
    return (
        <div>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet />
                </div>
                <div className="drawer-side  ">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-gray-600  text-white">
                        <Link className="p-3 hover:text-green-500" to='/dashboard'>Dashboard</Link><hr />
                        <Link to='/dashboard/supplies' className="p-3 hover:text-green-500">Supplies List</Link> <hr />
                        <Link to='/dashboard/create-supply' className="p-3 hover:text-green-500">Create Supply</Link> <hr />

                    </ul>

                </div>
            </div>
        </div>
    )
}

export default SidebarMenu
