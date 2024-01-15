/* eslint-disable react/prop-types */

const Card = ({ cardData }) => {
    const { image, name, salary, role } = cardData
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-2xl">
                <figure className="px-10 pt-5">
                    <img src={image} alt={name} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center py-0">
                    <h2 className="card-title">{name}</h2>
                    <p>Salary: {salary}$ <br /> Role: {role}</p>
                        <button className="btn btn-wide btn-outline shadow-xl">Hire Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;