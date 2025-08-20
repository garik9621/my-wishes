export interface Wish {
  id: string
  title: string
  description?: string
  price: number
  priority: 'low' | 'medium' | 'high'
  isCompleted: boolean
  createdAt: Date
  updatedAt: Date
  link: string
  image: string
}

export interface CreateWishData {
  title: string
  description?: string
  price: number
  priority: 'low' | 'medium' | 'high'
  link: string
  image: string
}

export interface UpdateWishData {
  title?: string
  description?: string
  price?: number
  priority?: 'low' | 'medium' | 'high'
  isCompleted?: boolean
  link: string
  image: string
}
