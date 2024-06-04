import FormCards from "@/components/FormCards";
import FormGenerator from "@/components/FormGenerator";


export default function Home() {
  return (
   <div className="w-full">
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
    <FormGenerator/>
    <FormCards/>
    </div>
   </div>
  );
}
