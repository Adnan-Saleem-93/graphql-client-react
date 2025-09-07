import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'

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
        <TabsTrigger value="users" className="w-full">
          Users
        </TabsTrigger>
      </TabsList>
      <TabsContent value="games">Make changes to your account here.</TabsContent>
      <TabsContent value="reviews">Change your password here.</TabsContent>
      <TabsContent value="users">.</TabsContent>
    </Tabs>
  )
}
