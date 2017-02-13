let watch = {
    "value.currentPage"(this: uibPagination, value: number) {
        this.currentPage = value;
        this.$emit("change");
    }
};

export default watch;