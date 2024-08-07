import { useState, useEffect } from "react";
import { Cat, Heart, Paw, Camera, Music, Moon, Star, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useToast } from "@/components/ui/use-toast";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [likes, setLikes] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [catHappiness, setCatHappiness] = useState(50);
  const { toast } = useToast();

  const catImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/1200px-Kittyply_edit1.jpg",
  ];

  const catFacts = [
    "Cats have been domesticated for over 4,000 years.",
    "They can make over 100 different vocal sounds.",
    "A group of cats is called a 'clowder'.",
    "Cats spend 70% of their lives sleeping.",
    "They have a third eyelid called the 'haw' to protect their eyes.",
    "A cat's hearing is much more sensitive than humans and dogs.",
    "Cats have over 20 vocalizations that they use to communicate with humans.",
  ];

  const catBreeds = [
    { name: "Siamese", description: "Known for their distinctive coloring and vocal nature.", rating: 4.5 },
    { name: "Persian", description: "Recognized for their long fur and flat faces.", rating: 4.2 },
    { name: "Maine Coon", description: "One of the largest domestic cat breeds with tufted ears.", rating: 4.8 },
    { name: "British Shorthair", description: "Famous for their round faces and dense coats.", rating: 4.3 },
    { name: "Sphynx", description: "Hairless breed known for their wrinkled skin and large ears.", rating: 4.0 },
    { name: "Bengal", description: "Wild-looking breed with spotted or marbled coat patterns.", rating: 4.6 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % catImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleLike = () => {
    setLikes(likes + 1);
    setCatHappiness(Math.min(catHappiness + 10, 100));
    toast({
      title: "Thanks for the love!",
      description: "You're paw-some!",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-6xl font-bold mb-8 flex items-center justify-center text-purple-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Cat className="mr-4 h-12 w-12" /> Meow-velous Cats
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-12"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={catImages[currentImageIndex]}
              alt="A cute cat"
              className="mx-auto object-cover w-full h-[500px] rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          <motion.div 
            className="absolute bottom-4 right-4 bg-white bg-opacity-70 rounded-full p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Camera className="h-6 w-6 text-purple-600" />
          </motion.div>
        </motion.div>

        <Tabs defaultValue="facts" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="facts">Cat Facts</TabsTrigger>
            <TabsTrigger value="breeds">Cat Breeds</TabsTrigger>
          </TabsList>
          <TabsContent value="facts">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Fascinating Feline Facts</CardTitle>
                <CardDescription>Discover interesting tidbits about our purr-fect friends.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {catFacts.map((fact, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center bg-white p-3 rounded-lg shadow"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, backgroundColor: "#f0e6ff" }}
                    >
                      <Paw className="mr-3 h-5 w-5 text-purple-500 flex-shrink-0" />
                      <span>{fact}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Popular Cat Breeds</CardTitle>
                <CardDescription>Explore some of the most beloved cat breeds.</CardDescription>
              </CardHeader>
              <CardContent>
                <Carousel className="w-full max-w-xs mx-auto">
                  <CarouselContent>
                    {catBreeds.map((breed, index) => (
                      <CarouselItem key={index}>
                        <Card className="bg-white p-6 rounded-lg shadow-lg">
                          <h3 className="font-semibold text-xl mb-3 text-purple-600">{breed.name}</h3>
                          <p className="text-gray-600 mb-3">{breed.description}</p>
                          <div className="flex items-center">
                            <Star className="text-yellow-400 mr-1" />
                            <span>{breed.rating.toFixed(1)}</span>
                          </div>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Show Some Love</CardTitle>
            <CardDescription>If you're feline the love, let us know!</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <motion.div 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
              className="mb-4"
            >
              <Button 
                variant="outline" 
                onClick={handleLike}
                className="flex items-center text-lg px-6 py-3"
              >
                <Heart className="mr-2 h-6 w-6 text-red-500" />
                Purr if you like!
              </Button>
            </motion.div>
            <div className="w-full max-w-xs">
              <p className="text-center mb-2">Cat Happiness Meter</p>
              <Progress value={catHappiness} className="h-2 bg-purple-200" />
            </div>
          </CardContent>
          <CardFooter className="text-center">
            <p className="w-full text-lg">
              This page has been liked <Badge variant="secondary" className="ml-1 text-lg">{likes}</Badge> times
            </p>
          </CardFooter>
        </Card>

        <footer className="mt-12 text-center text-gray-600">
          <motion.p 
            className="flex items-center justify-center text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Created with <Heart className="mx-2 h-5 w-5 text-red-500" /> by cat enthusiasts
          </motion.p>
          <motion.div 
            className="mt-4 flex justify-center space-x-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, type: "spring" }}
          >
            <Music className="h-6 w-6 text-purple-500" />
            <Moon className="h-6 w-6 text-purple-500" />
            <Paw className="h-6 w-6 text-purple-500" />
            <Sparkles className="h-6 w-6 text-purple-500" />
          </motion.div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
