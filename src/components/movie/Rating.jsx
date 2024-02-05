import star from '../../assets/star.svg'
const Rating = ({ value }) => {

    const stars = Array(value).fill(star);
    return (
        <>
            {
                stars.map((star, index) => (
                    <img
                        key={index}
                        src={star}
                        alt="star"
                        width={'14px'}
                        height={'14px'}
                    />

                ))
            }

        </>

    );
};

export default Rating;