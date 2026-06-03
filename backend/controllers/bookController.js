const getBooks = (req, res) => {
    res.json([
        {
            title: "Suç ve Ceza",
            author: "Dostoyevski",
            status: "Müsait"
        },
        {
            title: "Sefiller",
            author: "Victor Hugo",
            status: "Ödünçte"
        }
    ]);
};

module.exports = { getBooks };