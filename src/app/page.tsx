import Activity from "./activity";

export default function Home() {
    return (
        <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-2">
                <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">

                    <div className="w-full max-w-3xl mx-auto">

                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                            <Activity Title="Dzień Chłopaka" Date="2024-09-30" Content="Przezenty dla chłopców." />
                            <Activity Title="Dzień Nauczyciela" Date="2024-10-14" Content="Prezenty na dzień nauczyciela." />
                            <Activity Title="Mikołajki" Date="2024-11-28" Content="Soki, pizza." />
                            <Activity Title="Wigilia" Date="2024-12-24" Content="Kolacja wigilijna." />
                            <Activity Title="Bal przebierańców" Date="2025-02-14" Content="Soki, pizza." />
                            <Activity Title="Dzień kobiet" Date="2025-03-08" Content="Prezenty dla dziewczyn." />
                            <Activity Title="Wielkanoc" Date="2025-04-18" Content="Spotkanie wigilijne." />
                            <Activity Title="Koniec roku" Date="2025-06-27" Content="Prezenty dla nauczycieli itp." />
                            
                        </div>

                    </div>

                </div>
            </div>
        </main>
    );
}
