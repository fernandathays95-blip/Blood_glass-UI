import { ThemeLoader } from '../../utils/ThemeLoader';

/**
 * Renderiza um ícone do conjunto Blood_symbols.
 * @param {Object} props
 * @param {string} props.name - O ID do ícone (ex: 'settings')
 * @param {boolean} [props.isAccent=false] - Se deve usar a cor de destaque primária
 */
export function Icon({ name, isAccent = false }) {
    // 1. Obter o nome do arquivo SVG
    const iconFileName = ThemeLoader.getIconFile(name);
    
    // 2. Definir a cor
    const color = isAccent 
        ? ThemeLoader.getColor('accent_primary') 
        : ThemeLoader.getColor('text_primary');

    // 3. Definir o tamanho padrão
    const size = ThemeLoader.getIconFile('default_scale');
    
    // Simulação de carregamento do SVG (no OS real seria um módulo de renderização de gráficos)
    const iconPath = `/src/assets/icons/blood_symbols/${iconFileName}`;

    return (
        <img 
            src={iconPath} 
            alt={`Icone de ${name}`} 
            width={size} 
            height={size} 
            style={{ fill: color, transition: 'fill 0.2s ease-in-out' }} 
        />
    );
}
