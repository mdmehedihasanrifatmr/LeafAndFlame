import Input from "@/components/ui/Input"
export default function Login(){
    return(
        <div className="flex justify-center items-center h-screen">
            <form className="border-1 border-dashed border-red-100">
                <Input
                label="Email"
                name="email"
                required={true}
                />
                <Input
                label="Password"
                type="password"
                name="password"
                required={true}
                />
            </form>
        </div>
    )
}