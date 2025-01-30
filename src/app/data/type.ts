export interface Workout {
  type: string;
  minutes: number;
}

// Define the interface for a user
export interface User {
  id: number;
  name: string;
  workouts: Workout[];
}