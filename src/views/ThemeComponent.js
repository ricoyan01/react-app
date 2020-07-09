import React, { useContext } from 'react';
import { ThemeContext } from '../themeContext';

export default function MyPage () {
    const { colorTheme } = useContext(ThemeContext)
        
        return (
          <div style={{
              backgroundColor:
              colorTheme
          }}>Selamat Datang</div>
    );
}
  