import Callback from "@/page-components/callback";
import { Suspense } from "react"

export default function Page() { return (
    <Suspense fallback={<div>Loading...</div>}>
      <Callback />
    </Suspense>
)}