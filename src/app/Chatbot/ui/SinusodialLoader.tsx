'use client'

import { PALETTE } from '@/app/utils/theme';
import { useState, useEffect } from 'react'
import styled from 'styled-components'

export default function SinusodialLoader() {

    const [data, setData] = useState(new Array(7).fill(0));

    useEffect(() => {
        let cnt = 0
        const timer = setInterval(() => {

            setData((n) => {

                let d = n.map((m, i) => {
                    return 2 * Math.sin(cnt + (2 * Math.PI * ((i + 1)/ 8)))
                })

                return d
            })
            cnt++

        }, 100)

        return () => {
            clearInterval(timer)
        }

    }, [])
    return (
        <LoaderWrapper>
            <Inner>
            {
                data.map((n, index) => {
                    return (
                        <div key={index} className='item'
                        style={{
                            transform: `translateY(${n}px)`,
                        }}
                        />
                    )
                })
            }
            </Inner>
        </LoaderWrapper>
    )
}

const LoaderWrapper = styled.div`
    position: relative;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Inner = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .item {
        background-color: ${PALETTE.SECONDARY.LIGHT};
        position: relative;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-right: 3px;
    }
    .item:last-child {
        margin-right: 0;
    }
`;