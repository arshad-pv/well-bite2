import Image from "next/image"
import Link from "next/link"
import { Clock, Flame } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface RecipeCardProps {
  title: string
  description: string
  calories: number
  prepTime: number
  dietType: string
  imagePath: string
}

export function RecipeCard({ title, description, calories, prepTime, dietType, imagePath }: RecipeCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <Image src={imagePath || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <Badge className="absolute right-2 top-2">{dietType}</Badge>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <Flame className="h-4 w-4 text-primary" />
            <span>{calories} calories</span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <Clock className="h-4 w-4 text-primary" />
            <span>{prepTime} mins</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/recipes/${title.toLowerCase().replace(/\s+/g, "-")}`}>View Recipe</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

