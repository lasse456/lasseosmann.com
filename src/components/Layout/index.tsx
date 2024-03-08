import Footer from "./Footer";
import Meta from "./Meta";
import Navbar from "./Navbar";


export default function Layout({ children, className }: { className?: string, children: React.ReactNode}){
    return (    
        <div className="min-h-screen flex flex-col justify-between bg-gray-100">
            <div className="w-[100%] mx-auto max-w-[1200px] bg-white border-x-[1px] min-h-screen">
                <Meta/>
                <Navbar />
                <div className="py-[100px] max-w-[1000px] w-[90%] mx-auto">
                    <div className={`${className}`}>
                        {children}
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}