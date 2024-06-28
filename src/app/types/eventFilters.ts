export interface EventFilterActions {
  onSearch: (value: string) => void;
  onFilter: (filter: string) => void;
  onExport: () => void;
  onLive: () => void;
}
