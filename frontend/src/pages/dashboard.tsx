import Sidebar from "../components/sidebar";

function Dashboard(){
    return(
        <div className="flex">
            <Sidebar/>
            <main className="flex-1 p-6">
                <h1 className="text-3xl font-bold">Dashboard</h1>
            </main>
        </div>
    );
}

export default Dashboard;