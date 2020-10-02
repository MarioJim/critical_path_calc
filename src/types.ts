export interface Activity {
  index: number;
  predecessors: number[];
  duration: number;
}

export interface ActivityCPM extends Activity {
  earliestStartTime: number;
  latestStartTime: number;
}
