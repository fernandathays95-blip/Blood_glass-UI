import { GlassCard } from '../system/GlassCard';
import { Icon } from '../system/Icon';
import { ThemeLoader } from '../../utils/ThemeLoader';

const apps = [
    { id: 'home', label: 'Home' },
    { id: 'browser', label: 'Browser' }, // O ID 'browser' precisa estar no system_props.json!
    { id: 'messages', label: 'Messages' },
    { id: 'settings', label: 'Settings' }
];

export function Dock({ activeAppId }) {
    const primaryColor = ThemeLoader.getColor('accent_primary');
    
    // Estilo para o Dock: flutuante na parte inferior
    const dockStyle = {
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '15px',
        zIndex: 100
    };

    return (
        <div style={dockStyle}>
            {/* O Dock inteiro recebe o efeito GlassCard */}
            <GlassCard>
                {apps.map(app => (
                    <div 
                        key={app.id} 
                        style={{ cursor: 'pointer', padding: '5px' }}
                        title={app.label}
                    >
                        {/* Se o app estiver ativo, usamos a cor de destaque (isAccent=true) */}
                        <Icon 
                            name={app.id} 
                            isAccent={app.id === activeAppId} 
                        />
                    </div>
                ))}
            </GlassCard>
        </div>
    );
}
