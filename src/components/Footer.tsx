import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-gray-800 py-10 mt-auto text-muted">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
         <div className="flex items-center gap-3">
            <Image src="/1000006154.png" alt="MineStudios" width={32} height={32} className="rounded-md grayscale opacity-70" />
            <span className="font-bold text-lg text-white">MineStudios</span>
         </div>
         <div className="flex flex-wrap justify-center gap-6 text-sm">
           <Link href="https://discord.gg/Kgvqc5jpBs" className="hover:text-primary transition-colors">Discord</Link>
           <Link href="#" className="hover:text-primary transition-colors">GitHub</Link>
           <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
           <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
         </div>
         <div className="text-sm">
           &copy; {new Date().getFullYear()} MineStudios.
         </div>
       </div>
    </footer>
  );
}
