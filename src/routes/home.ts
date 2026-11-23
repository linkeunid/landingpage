// Home page copy, EN + ID. Facts mirror the apps: lkmn.link (shortlink/s-app privacy page),
// Newda (mono/mono-app privacy page). Change a fact there, change it here.
const LKMN = 'https://lkmn.link';
const NEWDA = 'https://newda.linkeun.com';

type Value = { h: string; p: string; proof?: { label: string; href: string } };

const en = {
	title: 'Small tools for the web',
	description:
		'Linkeun Mono is the studio behind lkmn.link, the free URL shortener, and Newda, a map of anime, manga and light novels.',
	lede: 'A small studio in Indonesia that builds quiet tools for the web.',
	products: 'Products',
	lkmn: {
		what: 'Short links with visit counts and QR codes. A quick link needs no account.',
		state: 'Live',
		act: 'Shorten a link',
		example: 'An example short link and the address it opens'
	},
	newda: {
		what: 'Anime, manga and light novels as one map: studios, staff, voice actors and the franchises that tie them together.',
		state: 'Pre-launch',
		act: 'Take a look',
		nodes: ['Series', 'Studio', 'Voice actor', 'Franchise'],
		example: 'A small map: a series linked to its studio, a voice actor and its franchise'
	},
	about: 'About',
	prose:
		'Linkeun Mono is one person making small web tools. Each one is cut to a single job, fitted with care, and kept running after launch.',
	values: [
		{
			h: 'One job each',
			p: 'lkmn.link only shortens links. Newda only maps anime, manga and light novels.'
		},
		{
			h: 'Keep less',
			p: 'lkmn.link never saves your internet address with a visit, and deletes visit records after 90 days.',
			proof: { label: 'lkmn.link privacy', href: `${LKMN}/privacy` }
		},
		{
			h: 'No ads',
			p: 'No ads and no trackers. Newda sets no cookies unless you sign in.',
			proof: { label: 'Newda privacy', href: `${NEWDA}/privacy` }
		}
	] as Value[],
	contact: 'Contact',
	contactLede:
		'Have an idea for a small tool, or found a bug? Write in. A person reads every email, not a bot.'
};

export const COPY: Record<'en' | 'id', typeof en> = {
	en,
	id: {
		title: 'Alat web sederhana',
		description:
			'Linkeun Mono adalah studio di balik lkmn.link, pemendek tautan gratis, dan Newda, peta anime, manga, dan novel ringan.',
		lede: 'Studio kecil di Indonesia yang membuat alat web sederhana.',
		products: 'Produk',
		lkmn: {
			what: 'Ubah tautan panjang menjadi pendek, lengkap dengan jumlah pengunjung dan kode QR. Tidak perlu daftar akun.',
			state: 'Aktif',
			act: 'Pendekkan tautan',
			example: 'Contoh tautan pendek dan alamat yang dibukanya'
		},
		newda: {
			what: 'Anime, manga, dan novel ringan dalam satu peta: studio, kru, pengisi suara, dan waralaba yang menghubungkannya.',
			state: 'Belum diluncurkan',
			act: 'Lihat Newda',
			nodes: ['Seri', 'Studio', 'Pengisi suara', 'Waralaba'],
			example: 'Peta kecil: sebuah seri terhubung ke studio, pengisi suara, dan waralabanya'
		},
		about: 'Tentang',
		prose:
			'Linkeun Mono dikerjakan oleh satu orang yang membuat alat web kecil. Setiap alat dibuat untuk satu tugas, dirakit dengan cermat, dan tetap dirawat setelah dirilis.',
		values: [
			{
				h: 'Satu alat, satu tugas',
				p: 'lkmn.link hanya memendekkan tautan. Newda hanya memetakan anime, manga, dan novel ringan.'
			},
			{
				h: 'Data secukupnya',
				p: 'lkmn.link tidak pernah mencatat alamat internet perangkatmu saat tautan dibuka, dan catatan kunjungan dihapus setelah 90 hari.',
				proof: { label: 'Privasi lkmn.link', href: `${LKMN}/privacy` }
			},
			{
				h: 'Tanpa iklan',
				p: 'Tanpa iklan dan tanpa pelacak. Newda baru mengingatmu saat kamu masuk ke akun.',
				proof: { label: 'Privasi Newda', href: `${NEWDA}/privacy` }
			}
		],
		contact: 'Kontak',
		contactLede:
			'Punya ide alat kecil atau menemukan masalah? Tulis saja. Setiap pesan dibaca langsung oleh manusia, bukan bot.'
	}
};

export const LINKS = {
	lkmn: LKMN,
	newda: NEWDA,
	// what the slip shows: a real-looking long address, shortened
	example: {
		short: 'lkmn.link/launch',
		long: 'example.com/events/2026/product-launch?ref=newsletter'
	}
};
