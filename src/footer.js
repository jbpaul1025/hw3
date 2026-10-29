import './footer.css';

function Footer({ page, setPage, totalPages }) {
    return (
        <div className="pagination">
            {/* Prevent navigation before the first page. */}
            <button
                id="previous-button"
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
            >Previous</button>

            <span id="page-number">Page {page} of {totalPages}</span>

            {/* Disable forward navigation after the final available page. */}
            <button
                id="next-button"
                onClick={() => setPage(page + 1)}
                disabled={page >= totalPages}
            >Next</button>
        </div>
    );
}

export default Footer;