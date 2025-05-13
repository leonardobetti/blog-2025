import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AvatarComponent() {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src="/av.jpg" alt="Leonardo Betti" />
      <AvatarFallback>LB</AvatarFallback>
    </Avatar>
  )
}
