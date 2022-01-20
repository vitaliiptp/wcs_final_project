import react from "react";
import Link from "next/link";

const goBackButton = ({route})=>(
     
        <div>
            <Link href={route}>
                <button class="bg-blue-dark hover:underline text-white-normal px-4 py-2 rounded-[0.625rem]">
                 &lt; Go Back
                </button>
            </Link>
        </div>
)

export default goBackButton;