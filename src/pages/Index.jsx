import { useState } from "react";
import { Cat, Heart, Info, Paw } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [likes, setLikes] = useState(0);

  const catFacts = [
    "Cats have been domesticated for over 4,000 years.",
    "They can make over 100 different vocal sounds.",
    "A group of cats is called a 'clowder'.",
    "Cats spend 70% of their lives sleeping.",
    "They have a third eyelid called the 'haw' to protect their eyes.",
  ];

  const catBreeds = [
    { name: "Siamese", description: "Known for their distinctive coloring and vocal nature." },
    { name: "Persian", description: "Recognized for their long fur and flat faces." },
    { name: "Maine Coon", description: "One of the largest domestic cat breeds with tufted ears." },
    { name: "British Shorthair", description: "Famous for their round faces and dense coats." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-5xl font-bold mb-6 flex items-center justify-center text-purple-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Cat className="mr-2" /> All About Cats
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
            alt="A cute cat"
            className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg mb-8"
          />
        </motion.div>

        <Tabs defaultValue="facts" className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="facts">Cat Facts</TabsTrigger>
            <TabsTrigger value="breeds">Cat Breeds</TabsTrigger>
          </TabsList>
          <TabsContent value="facts">
            <Card>
              <CardHeader>
                <CardTitle>Fascinating Feline Facts</CardTitle>
                <CardDescription>Discover interesting tidbits about our feline friends.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {catFacts.map((fact, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Paw className="mr-2 h-4 w-4 text-purple-500" />
                      {fact}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds">
            <Card>
              <CardHeader>
                <CardTitle>Popular Cat Breeds</CardTitle>
                <CardDescription>Learn about some of the most beloved cat breeds.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {catBreeds.map((breed, index) => (
                    <motion.div
                      key={index}
                      className="bg-white p-4 rounded-lg shadow"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <h3 className="font-semibold text-lg mb-2">{breed.name}</h3>
                      <p className="text-sm text-gray-600">{breed.description}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Show Some Love</CardTitle>
            <CardDescription>If you're a cat lover, let us know!</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button 
              variant="outline" 
              onClick={() => setLikes(likes + 1)}
              className="flex items-center"
            >
              <Heart className="mr-2 h-4 w-4 text-red-500" />
              Like
            </Button>
          </CardContent>
          <CardFooter className="text-center">
            <p className="w-full">This page has been liked {likes} times</p>
          </CardFooter>
        </Card>

        <footer className="mt-8 text-center text-gray-600">
          <p>Created with <Heart className="inline-block h-4 w-4 text-red-500" /> by cat enthusiasts</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
