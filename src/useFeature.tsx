import axios from "axios";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";



type KeyFeature = // Темная тема
'e2cf2a5e-56c8-4d79-b52e-8430f4033f81'|
// Test
'bbdb177c-72b2-4d65-85d2-f5ca65f2b21d'

type Feature = Map<KeyFeature, boolean>

const urlFeatures = 'http://localhost:5173/api/features/model/?projectId=39e29709-42f2-47a5-a728-564e2b4fa071'

const FeaturesContext = createContext<Feature| undefined>(undefined)

export function useFeature(key: KeyFeature) {
  const context = useContext(FeaturesContext)
  console.log(context)
  if (context === undefined) {
    return false
  }
  return Boolean(context?.get(key))
}



export const FeaturesProvider = ({ children }: { children: ReactNode } ) => {
  const [features, setFeatures] = useState<Feature>()


  useEffect(() => {
    const fetchFeatures = async () => {
      const res = await axios.get<Feature>(urlFeatures)
      setFeatures(new Map(res.data))
    } 
    fetchFeatures()
  }, []) 

  return <FeaturesContext.Provider value={features}>{children}</FeaturesContext.Provider>
}