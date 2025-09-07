import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import GamesTab from '../pages/GamesTab'
import ReviewsTab from '../pages/ReviewsTab'
import AuthorsTab from '../pages/AuthorsTab'

export default function TabsSection() {
  return (
    <Tabs defaultValue="games" className="w-full">
      <TabsList className="w-full">
        <TabsTrigger value="games" className="w-full">
          Games
        </TabsTrigger>
        <TabsTrigger value="reviews" className="w-full">
          Reviews
        </TabsTrigger>
        <TabsTrigger value="authors" className="w-full">
          Authors
        </TabsTrigger>
      </TabsList>
      <TabsContent value="games">
        <GamesTab />
      </TabsContent>
      <TabsContent value="reviews">
        <ReviewsTab />
      </TabsContent>
      <TabsContent value="authors">
        <AuthorsTab />
      </TabsContent>
    </Tabs>
  )
}
