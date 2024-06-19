import './Homepage.component.scss';
import MenuItem from '../../components/menu-item/menu-item.component';
import { useSelector } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

const HomePage = () => {
	const { sections } = useSelector(
		createStructuredSelector({
			sections: selectDirectorySections,
		})
	);

	return (
		<div className="homepage">
			<div className="directory-menu">
				{sections.map(({ id, ...sectionProp }: any) => (
					<MenuItem key={id} {...sectionProp} />
				))}
			</div>
		</div>
	);
};

export default HomePage;
