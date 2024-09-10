import Image from "next/image";
import Activity from "./activity";

export default function Home() {
    return (
        <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-2">
                <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">

                    <div className="w-full max-w-3xl mx-auto">

                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                            <Activity Title="This should be done" Date="2024-01-01" Content="This is done" />
                            <Activity Title="This is some title" Date="2024-02-01" Content="This is some random text" />
                            <Activity Title="This should go to other side" Date="2024-09-01" Content="This is another random text2" />
                            <Activity Title="This should go to other side" Date="2024-09-20" Content="This is another random text2" />
                            <Activity Title="This should go to other side" Date="2024-09-21" Content="This is another random text2" />
                            <Activity Title="This should go to other side" Date="2024-10-01" Content="This is another random text" />
                            
                        </div>

                    </div>

                </div>
            </div>
        </main>
    );
}
