import Login from "@/page-components/login"
import { Suspense } from "react"

export default function Page() { return (
    <Suspense fallback={<div>Loading...</div>}>
      <Login />
    </Suspense> 
)}