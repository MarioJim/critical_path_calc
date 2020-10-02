export interface Activity {
  index: number;
  predecessors: number[];
  duration: number;
}

export interface ActivityWithTimes extends Activity {
  earliestStartTime: number;
  latestStartTime: number;
}

export interface Validation {
  error: string;
  activities: Activity[];
}
