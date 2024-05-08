/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/8aq2w1fL9IX
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function Profile() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <div className="flex items-center space-x-6">
        <Avatar>
          <AvatarImage alt="Profile image" src="/placeholder.svg?height=128&width=128" />
          <AvatarFallback>KB</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-white text-3xl font-bold">Kushal Bhana</h1>
          <p className="text-gray-400">@KushalBhana</p>
        </div>
        <Button className="bg-white text-black">View Resume</Button>
      </div>
    </div>
  )
}