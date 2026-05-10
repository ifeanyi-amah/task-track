

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
                style={styles.adjust}
                onClick={() => onFilterChange("all")}
                disabled={currentFilter === "all"}
            >
                All
            </button>
            <button 
                style={styles.adjust}
                onClick={() => onFilterChange("pending")}
                disabled={currentFilter === "pending"}
            >
                Pending
            </button>
            <button style={styles.adjust}
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
    justifyContent: "center",
    marginTop: "30px",
  },
  adjust: {
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
  }
};

export default FilterButtons