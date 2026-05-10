

interface FilterButtonsProps {
    currentFilter: string;
    onFilterChange: (filter: string) => void;
}

const FilterButtons = ({
    currentFilter,
    onFilterChange,
}: FilterButtonsProps) => {
    return (
        <div style={styles.container}>
            <button 
                onClick={() => onFilterChange("all")}
                disabled={currentFilter === "all"}
            >
                All
            </button>
            <button 
                onClick={() => onFilterChange("pending")}
                disabled={currentFilter === "pending"}
            >
                Pending
            </button>
            <button 
                onClick={() => onFilterChange("completed")}
                disabled={currentFilter === "completed"}
            >
                Completed
            </button>
        </div>
    );
};

const styles = {
  container: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
};

export default FilterButtons;