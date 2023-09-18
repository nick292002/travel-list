export default function Stats({ Items }) {

    if (!Items.length)
        return (
            <footer className="container-fluid p-2 bg-dark fst-italic">
                <h4 className="container text-center text-white mb-0">
                    Start adding some items to your packing ist 👜
                </h4>
            </footer>
        );

    const totalItems = Items.length;
    const numPacked = Items.filter(item => item.packed).length;
    const percentage = Math.round((numPacked / totalItems) * 100);
    return (
        <footer className="container-fluid p-2 bg-dark fst-italic">
            <h4 className="container text-center text-white mb-0">
                {percentage === 100 ?
                    `You got everiyhing! to go ✈`
                    : `🎒 you have ${totalItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}</h4>
        </footer>
    )
}