interface StatCardProps {
    title: string;
    value: number;
    subtitle?: string;
    icon: string;
    subtitleColor?: string;
    iconColor: string;
}

export function StatCard({ title, value, subtitle, icon, subtitleColor, iconColor }: StatCardProps) {

    return (
        <div className="stat-card">
            <div className="stat-info">
                <p>{title}</p>
                <div className="stat-number"> {value} </div>
                <div className="stat-sub" style={{ color: subtitleColor }}>
                    {subtitle}
                </div>
            </div>
            
            <div className="stat-icon" style={{ color: iconColor }}>
                {icon}
            </div>

            
        </div>
    )
    
}