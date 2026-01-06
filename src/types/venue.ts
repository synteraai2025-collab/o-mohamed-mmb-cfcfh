import { z } from 'zod';

// Venue status enum
export const VenueStatus = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  PENDING: 'pending',
  SUSPENDED: 'suspended',
} as const;

export type VenueStatusType = typeof VenueStatus[keyof typeof VenueStatus];

// Venue category enum
export const VenueCategory = {
  RESTAURANT: 'restaurant',
  BAR: 'bar',
  CLUB: 'club',
  THEATER: 'theater',
  STADIUM: 'stadium',
  ARENA: 'arena',
  CONFERENCE: 'conference',
  WEDDING: 'wedding',
  EVENT_SPACE: 'event_space',
  OTHER: 'other',
} as const;

export type VenueCategoryType = typeof VenueCategory[keyof typeof VenueCategory];

// Base venue interface
export interface Venue {
  id: string;
  name: string;
  description: string;
  category: VenueCategoryType;
  status: VenueStatusType;
  capacity: number;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  contact: {
    email: string;
    phone: string;
    website?: string;
  };
  amenities: string[];
  images: string[];
  pricing: {
    hourlyRate?: number;
    dailyRate?: number;
    currency: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
  operatingHours: {
    monday?: { open: string; close: string };
    tuesday?: { open: string; close: string };
    wednesday?: { open: string; close: string };
    thursday?: { open: string; close: string };
    friday?: { open: string; close: string };
    saturday?: { open: string; close: string };
    sunday?: { open: string; close: string };
  };
  createdAt: Date;
  updatedAt: Date;
  ownerId: string;
  rating?: number;
  reviewCount?: number;
}

// Create venue input interface
export interface CreateVenueInput {
  name: string;
  description: string;
  category: VenueCategoryType;
  capacity: number;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  contact: {
    email: string;
    phone: string;
    website?: string;
  };
  amenities: string[];
  images: string[];
  pricing: {
    hourlyRate?: number;
    dailyRate?: number;
    currency: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
  operatingHours: {
    monday?: { open: string; close: string };
    tuesday?: { open: string; close: string };
    wednesday?: { open: string; close: string };
    thursday?: { open: string; close: string };
    friday?: { open: string; close: string };
    saturday?: { open: string; close: string };
    sunday?: { open: string; close: string };
  };
}

// Update venue input interface
export interface UpdateVenueInput extends Partial<CreateVenueInput> {
  status?: VenueStatusType;
}

// Venue filters interface
export interface VenueFilters {
  category?: VenueCategoryType;
  status?: VenueStatusType;
  city?: string;
  state?: string;
  minCapacity?: number;
  maxCapacity?: number;
  minRating?: number;
  amenities?: string[];
  search?: string;
}

// Venue pagination interface
export interface VenuePagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

// Venue list response interface
export interface VenueListResponse {
  data: Venue[];
  pagination: VenuePagination;
}

// Venue validation schemas
export const venueAddressSchema = z.object({
  street: z.string().min(1, 'Street address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  zipCode: z.string().min(1, 'ZIP code is required'),
  country: z.string().min(1, 'Country is required'),
});

export const venueContactSchema = z.object({
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  website: z.string().url('Invalid website URL').optional(),
});

export const venuePricingSchema = z.object({
  hourlyRate: z.number().positive('Hourly rate must be positive').optional(),
  dailyRate: z.number().positive('Daily rate must be positive').optional(),
  currency: z.string().min(1, 'Currency is required'),
});

export const venueCoordinatesSchema = z.object({
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
});

export const operatingHoursSchema = z.object({
  open: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format (HH:MM)'),
  close: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format (HH:MM)'),
});

export const venueOperatingHoursSchema = z.object({
  monday: operatingHoursSchema.optional(),
  tuesday: operatingHoursSchema.optional(),
  wednesday: operatingHoursSchema.optional(),
  thursday: operatingHoursSchema.optional(),
  friday: operatingHoursSchema.optional(),
  saturday: operatingHoursSchema.optional(),
  sunday: operatingHoursSchema.optional(),
});

export const createVenueSchema = z.object({
  name: z.string().min(1, 'Venue name is required').max(100, 'Name must be 100 characters or less'),
  description: z.string().min(1, 'Description is required').max(1000, 'Description must be 1000 characters or less'),
  category: z.enum(Object.values(VenueCategory) as [string, ...string[]]),
  capacity: z.number().positive('Capacity must be positive').int('Capacity must be a whole number'),
  address: venueAddressSchema,
  contact: venueContactSchema,
  amenities: z.array(z.string()).min(1, 'At least one amenity is required'),
  images: z.array(z.string().url('Invalid image URL')).max(10, 'Maximum 10 images allowed'),
  pricing: venuePricingSchema,
  coordinates: venueCoordinatesSchema,
  operatingHours: venueOperatingHoursSchema,
});

export const updateVenueSchema = createVenueSchema.partial().extend({
  status: z.enum(Object.values(VenueStatus) as [string, ...string[]]).optional(),
});

export const venueFiltersSchema = z.object({
  category: z.enum(Object.values(VenueCategory) as [string, ...string[]]).optional(),
  status: z.enum(Object.values(VenueStatus) as [string, ...string[]]).optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  minCapacity: z.number().positive().optional(),
  maxCapacity: z.number().positive().optional(),
  minRating: z.number().min(0).max(5).optional(),
  amenities: z.array(z.string()).optional(),
  search: z.string().optional(),
});

// Type inference from schemas
export type CreateVenueFormData = z.infer<typeof createVenueSchema>;
export type UpdateVenueFormData = z.infer<typeof updateVenueSchema>;
export type VenueFiltersData = z.infer<typeof venueFiltersSchema>;

// Venue error types
export interface VenueError {
  code: string;
  message: string;
  details?: Record<string, any>;
}

// Venue loading states
export interface VenueLoadingState {
  isLoading: boolean;
  isCreating: boolean;
  isUpdating: boolean;
  isDeleting: boolean;
  isFetching: boolean;
}
