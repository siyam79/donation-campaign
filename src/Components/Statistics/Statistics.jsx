import { PieChart, Pie, Cell, Legend } from 'recharts';


const Statistics = () => {
    const donaTion = JSON.parse(localStorage.getItem('donaTion'))
    console.log(donaTion);
    const COLORS = ['#FF444A', '#00C49F', '#FFBB28', '#FF8042'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    const data = [
        { name: 'Total Donation', value: (12 - donaTion?.length) },
        { name: 'Your Donation', value: donaTion?.length },
    ];
    const data2 = [
        { name: 'Total Donation', value: 100 },
        { name: 'Your Donation', value: 0 },
    ];

    return (
        <div className='  '>
            <div className="flex items-center justify-center">
                <div>
                    {
                        donaTion !== null ? <>  <PieChart width={300} height={300}>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={100}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend></Legend>
                        </PieChart> </> : (
                            <PieChart width={300} height={300}>
                                <Pie
                                    data={data2}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    <Cell fill={COLORS[0]} />
                                </Pie>
                                <Legend></Legend>
                            </PieChart>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default Statistics;