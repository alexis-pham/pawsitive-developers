// List of all dogs available for adoption
export const dogs = [
  {
    id: "1",
    name: "Buddy",
    breed: "Golden Retriever",
    age: "3 years",
    ageCategory: "Adult",
    gender: "Male",
    location: "Irvine, CA",
    image: "/images/dog-1.jpg",
  },
  {
    id: "2",
    name: "Bella",
    breed: "Labrador Retriever",
    age: "8 months",
    ageCategory: "Puppy",
    gender: "Female",
    location: "San Diego, CA",
    image: "/images/dog-2.jpg",
  },
  {
    id: "3",
    name: "Max",
    breed: "Beagle",
    age: "5 years",
    ageCategory: "Adult",
    gender: "Male",
    location: "Los Angeles, CA",
    image: "/images/dog-3.jpg",
  },
  {
    id: "4",
    name: "Luna",
    breed: "German Shepherd",
    age: "2 years",
    ageCategory: "Adult",
    gender: "Female",
    location: "Irvine, CA",
    image: "/images/dog-4.jpg",
  },
  {
    id: "5",
    name: "Charlie",
    breed: "Corgi",
    age: "4 years",
    ageCategory: "Adult",
    gender: "Male",
    location: "San Francisco, CA",
    image: "/images/dog-5.jpg",
  },
  {
    id: "6",
    name: "Sasha",
    breed: "Siberian Husky",
    age: "9 years",
    ageCategory: "Senior",
    gender: "Female",
    location: "Portland, OR",
    image: "/images/dog-6.jpg",
  },
];

// Get a list of unique breeds from the dogs array
export const breeds = [...new Set(dogs.map((d) => d.breed))].sort();

// Age categories for filtering
export const ageCategories = ["Puppy", "Adult", "Senior"];
