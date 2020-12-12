import React from 'react';
import Footer from './../Footer';
import { motion, AnimatePresence } from 'framer-motion';

const Results = () => {
	return (
		<AnimatePresence>
			<motion.div
				key='Results'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				<h2>Hello from Results component!</h2>
				<Footer />
			</motion.div>
		</AnimatePresence>
	);
};

export default Results;
