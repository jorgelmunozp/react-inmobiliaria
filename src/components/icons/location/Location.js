export const Location = ({ strokeWidth='0', width='1', height='1'}) => {
    return (
        <span>
            <svg stroke="currentColor" fill="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24" height={height + 'em'} width={width + 'em'} xmlns="http://www.w3.org/2000/svg">
                <path fill="none" strokeWidth={strokeWidth} d="M12,22 C12,22 4,16 4,10 C4,5 8,2 12,2 C16,2 20,5 20,10 C20,16 12,22 12,22 Z M12,13 C13.657,13 15,11.657 15,10 C15,8.343 13.657,7 12,7 C10.343,7 9,8.343 9,10 C9,11.657 10.343,13 12,13 L12,13 Z"></path>
            </svg>
        </span>
    );
}