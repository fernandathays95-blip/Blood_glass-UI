import { ThemeLoader } from '../../utils/ThemeLoader';

/**
 * Renderiza um contêiner com o efeito de vidro fosco do Blood_glass.
 * @param {Object} props
 * @param {ReactNode} props.children - Conteúdo dentro do cartão
 */
export function GlassCard({ children }) {
    const glassConfig = ThemeLoader.getGlassConfig();
    const radius = ThemeLoader.getStyle('corner_radius');

    // Aqui usamos propriedades CSS (ou estilos proprietários do OS) para simular o efeito.
    const style = {
        // iOS-style blur e transparência
        backdropFilter: `blur(${glassConfig.blur_strength})`,
        backgroundColor: glassConfig.tint_color,
        opacity: glassConfig.transparency_alpha,

        // Estilo do Blood_glass
        borderRadius: radius,
        border: `1px solid ${ThemeLoader.getColor('accent_primary')}10`, // Borda sutil escarlate

        // Outros estilos de layout
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
        padding: '20px'
    };

    return (
        <div style={style}>
            {children}
        </div>
    );
}
